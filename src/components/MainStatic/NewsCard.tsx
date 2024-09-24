import React from "react";

interface NewsItem {
	title: string;
	description: string;
	link: string;
}

const NewsCard: React.FC<NewsItem> = ({
	title,
	description,
	link,
}) => {
	// Function to extract image URL from HTML content
	const getImageUrl = (
		htmlContent: string,
		titleImage: string
	): string | undefined => {
		const imgElement = document.createElement("div");
		imgElement.innerHTML = htmlContent;
		const img = imgElement.querySelector("img");
		return img && img.src !== titleImage ? img.src : undefined;
	};

	// Extract image URL
	const imageUrl = getImageUrl(description, title);

	return (
		<div className="border p-4 rounded-lg shadow-md bg-white">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2 className="text-lg font-semibold mb-2">{title}</h2>
			</a>
			{imageUrl && (
				<div className="mb-2">
					<img
						src={imageUrl}
						alt={title}
						className="w-full"
					/>
				</div>
			)}
			<div dangerouslySetInnerHTML={{ __html: description }} />
		</div>
	);
};

export default NewsCard;
