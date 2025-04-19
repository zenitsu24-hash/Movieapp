import { useEffect } from "react";

const apikey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTgwMjJjZmE2YjkwNmNiYTIwYTFkMmMwY2FhYjQ2ZSIsIm5iZiI6MTc0MDQyMTk1Mi4wMDMsInN1YiI6IjY3YmNiYjNmMjNmZTExN2VlNmE0N2I2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XMHqQXHHgvpYRikhIBIKQC8OX_ommkdVHA3OHYOq2uk'

export const image500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342${path}` : null
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null


export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTgwMjJjZmE2YjkwNmNiYTIwYTFkMmMwY2FhYjQ2ZSIsIm5iZiI6MTc0MDQyMTk1Mi4wMDMsInN1YiI6IjY3YmNiYjNmMjNmZTExN2VlNmE0N2I2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XMHqQXHHgvpYRikhIBIKQC8OX_ommkdVHA3OHYOq2uk'
    }
}