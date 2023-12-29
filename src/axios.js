import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID vUi51XZJCqSUSn54tItGgVhrRLVnkzUxtXCVb9sMCvM'
    }
})

// npm i axios