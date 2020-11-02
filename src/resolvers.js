import { assertType } from 'graphql';
import {Book} from './models/book'
export default {
  Query: {
    books: () => Book.find(),
  },
  Mutation: {
    createBook: async(_, {title,author}) => {
      const book = new Book({ title ,author});
      await book.save()
      return book
    },
    updateBook: async(_, {id, title, author}) => {
      await Book.findByIdAndUpdate(id, {title, author},)
      return Book.findById(id)
    },
    deleteBook: async(_, {id}) => {
      await Book.findOneAndDelete(id)
      return Book.find()
    }
  }
};
