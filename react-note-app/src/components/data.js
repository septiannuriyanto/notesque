const getNotes = () =>{
    return[
        {
            id : 1,
            title : "Note Pertama",
            createdAt : "20 Oktober 2023",
            archived : true,
            body : "Ini Note Pertama"
        },
        {
            id : 2,
            title : "Note Kedua",
            createdAt : "19 Oktober 2023",
            archived : false,
            body : "Ini Note Kedua"
        },
        {
            id : 3,
            title : "Note Ketiga",
            createdAt : "18 Oktober 2023",
            archived : false,
            body : "Ini Note Ketiga"
        },
        {
            id : 4,
            title : "Note Keempat",
            createdAt : "17 Oktober 2023",
            archived : false,
            body : "Ini Note Keempat"
        },
    ]
}



export {getNotes}