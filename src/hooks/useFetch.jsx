import { useEffect, useState } from "react";

export default function useFetch(prompt) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        async function fetchPhoto() {
            const url = `https://api.pexels.com/v1/search?query=${prompt}&per_page=1`
            try {
                setLoading(true);
                setError(false);
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: process.env.REACT_APP_PEXELS_API_KEY
                    }
                });
                const data = await response.json();
                setPhoto(data.photos[0]);
                setLoading(false);
            } catch(err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchPhoto();
    }, []);

    return {
        photo,
        loading,
        error
    }
}