import { useEffect, useState } from "react";
import BookCards from "../../components/BookCards";
const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://book-vault-server-theta.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};
export default FavoriteBooks;
