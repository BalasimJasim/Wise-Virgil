export const fetchBooks = async (query) => {
  if (!query) {
    throw new Error("Query cannot be empty");
  }

  const API_KEY = "AIzaSyDwgQr5cgm2nXqUc91RNM3ypyvVpkyXioQ";
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(
      query
    )}&key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  if (!data.items) {
    return [];
  }

  return data.items.map((item) => ({
    id: item.id,
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors
      ? item.volumeInfo.authors.join(", ")
      : "Unknown",
    image: item.volumeInfo.imageLinks
      ? item.volumeInfo.imageLinks.thumbnail
      : "no_image_available.jpg",
    rating: item.volumeInfo.averageRating || 0,
    reviews: item.volumeInfo.ratingsCount || 0,
    price: item.saleInfo.listPrice
      ? item.saleInfo.listPrice.amount
      : "Not for sale",
    description: item.volumeInfo.description || "No description available",
    inStock: item.saleInfo.isEbook || false,
    printLength: item.volumeInfo.pageCount || "Unknown",
    language: item.volumeInfo.language || "Unknown",
    publicationDate: item.volumeInfo.publishedDate || "Unknown",
  }));
};
