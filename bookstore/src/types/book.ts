import { ReactNode } from "react"

type Book = {
    bookCover: string,
    title: string, 
    author:string, 
    genre:string,
    price: number, 
    children?: ReactNode
}

export default Book