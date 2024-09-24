// CryptoNewsFeed.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

interface NewsItem {
	title: string;
	description: string;
	link: string;
}

const CryptoNewsFeed: React.FC = () => {
	const [news, setNews] = useState<NewsItem[]>([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					"https://cointelegraph.com/rss"
				);
				const parser = new DOMParser();
				const xmlDoc = parser.parseFromString(
					response.data,
					"text/xml"
				);
				const items = xmlDoc.querySelectorAll("item");

				const newsItems: NewsItem[] = Array.from(items).map(
					(item: any) => ({
						title: item.querySelector("title").textContent,
						description:
							item.querySelector("description").textContent,
						link: item.querySelector("link").textContent,
					})
				);

				setNews(newsItems);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchNews();
	}, []);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{news.map((item, index) => (
				<NewsCard
					key={index}
					title={item.title}
					description={item.description}
					link={item.link}
				/>
			))}
		</div>
	);
};

export default CryptoNewsFeed;
