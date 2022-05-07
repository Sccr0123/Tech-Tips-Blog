const { Post } = require("../models");

const postdata = [
	{
		title: "Donec posuere metus vitae ipsum.",
		post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 10,
	},
	{
		title: "Morbi non quam nec dui luctus rutrum.",
		post_url: "https://nasa.gov/donec.json",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 8,
	},
	{
		title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
		post_url:
			"https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 1,
	},
	{
		title: "Nunc purus.",
		post_url: "http://desdev.cn/enim/blandit/mi.jpg",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 4,
	},
	{
		title: "Pellentesque eget nunc.",
		post_url: "http://google.ca/nam/nulla/integer.aspx",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 7,
	},
	{
		title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		post_url: "https://stanford.edu/consequat.png",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 4,
	},
	{
		title: "In hac habitasse platea dictumst.",
		post_url: "http://edublogs.org/non/ligula/pellentesque.js",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 1,
	},
	{
		title: "Morbi non quam nec dui luctus rutrum.",
		post_url: "http://ucla.edu/consequat/nulla.html",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 1,
	},
	{
		title: "Duis ac nibh.",
		post_url: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 9,
	},
	{
		title: "Curabitur at ipsum ac tellus semper interdum.",
		post_url: "https://reverbnation.com/ligula/sit.jpg",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 5,
	},
	{
		title: "In hac habitasse platea dictumst.",
		post_url: "http://china.com.cn/lectus/vestibulum.json",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 3,
	},
	{
		title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
		post_url:
			"http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 10,
	},
	{
		title: "Donec dapibus.",
		post_url: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 8,
	},
	{
		title: "Nulla tellus.",
		post_url: "https://lycos.com/natoque/penatibus/et.html",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 3,
	},
	{
		title: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
		post_url: "https://gmpg.org/lorem.jpg",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 3,
	},
	{
		title: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
		post_url: "https://paginegialle.it/mattis/egestas.jsp",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 7,
	},
	{
		title: "In hac habitasse platea dictumst.",
		post_url: "http://wikia.com/turpis/eget.jpg",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 6,
	},
	{
		title: "Etiam justo.",
		post_url: "https://shareasale.com/quis.json",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 4,
	},
	{
		title: "Nulla ut erat id mauris vulputate elementum.",
		post_url:
			"http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 6,
	},
	{
		title: "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
		post_url: "https://java.com/at/nibh/in.png",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae ducimus voluptate ullam aperiam architecto sapiente tempora natus eligendi, culpa enim tempore, consequuntur optio eveniet, ea odio quos ut voluptas?",
		user_id: 7,
	},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
