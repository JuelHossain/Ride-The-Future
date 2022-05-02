const { useState, useEffect } = require("react")

const useReviews = (initial) => {
    const [reviews, setReviews] = useState(initial);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews]
}

export default useReviews;