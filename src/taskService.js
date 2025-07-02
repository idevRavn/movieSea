import { collection, query, where, getDocs, addDoc, updateDoc, orderBy, limit, doc } from "firebase/firestore";
import { db } from './firebase.js';

export const addMovieToDB = async (searchTerm, movie) => {
    if (!searchTerm.trim()) return;
    searchTerm = searchTerm.trim().toLowerCase();

    try {
        const movieRef = collection(db, "movies");
        const q = query(movieRef, where("searchTerm", "==", searchTerm));
        const querySnapshot = await getDocs(q);

        if(!querySnapshot.empty){
            const movieDoc = querySnapshot.docs[0];
            const currentCount = movieDoc.data().count;
            console.log("currentCount", currentCount);
            await updateDoc(doc(db, "movies", movieDoc.id), {
                count: currentCount + 1,
            })
            console.log("currentCount", currentCount)
        } else {
            await addDoc(movieRef, {
                searchTerm: searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://media.themoviedb.org/t/p/w500/${movie.poster_path}.jpg`,
            })
        }
    } catch (e){
        console.log(e);
    }
}

export const getMoviefromDB = async () => {
    try {
        const movieRef = collection(db, "movies");
        const q = query(movieRef, orderBy("count", "desc"), limit(5));

        const querySnapshot = await getDocs(q);

        const topMovies = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return topMovies;
    } catch (e) {
        console.log(e);
    }
}