import { useEffect, useState } from "react";
// import { fetchEthereumOrderBook } from "../api/EthereumApi";

interface OrderBook {
  bids: [string, string][]; // [price, volume]
  asks: [string, string][]; // [price, volume]
  // Removed name property since it's not used
}

const Ethereum = () => {
  const [orderBook, setOrderBook] = useState<OrderBook | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming fetchEthereumOrderBook is a function that fetches the order book data
        // const data: OrderBook = await fetchEthereumOrderBook();
        // setOrderBook(data);

        // Placeholder for fetched data (example)
        setOrderBook({
          bids: [
            ["500", "1"],
            ["495", "2"],
          ],
          asks: [
            ["505", "1.5"],
            ["510", "2.5"],
          ],
        });
      } catch (error) {
        console.error("Failed to fetch order book data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen grid">
      <div className=" bg-green-500 grid grid-cols-3 gap-3">
        <div className=" col-span-2 bg-gray-500"></div>
        <div className=""></div>
      </div>
      <div className=" bg-gray-500 grid grid-cols-3 gap-4">
        <div className="bg-black">
          <h3>Bids (Buying)</h3>
          <div>
            {orderBook!.bids?.map((bid, index) => (
              <div key={index}>
                Price: {bid[0]}, Volume: {bid[1]}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-500"></div>
        <div className="bg-red-500"></div>
      </div>
    </div>
  );
};
export default Ethereum;
