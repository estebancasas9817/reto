import { rest } from 'msw';
export const handlers = [
	rest.get('http://localhost:3030/card', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					name: 'Kanye West',
					id: 1,
					description:
						'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
					category: 'entertainment',
					picture:
						'https://www.tonica.la/__export/1590597653713/sites/debate/img/2020/05/27/avatar-portada.jpg_423682103.jpg',
					lastUpdated: '2020-03-10T23:08:57.892Z',
					votes: {
						positive: 23,
						negative: 36,
					},
				},
				{
					name: 'Mark Zuckerberg',
					id: 2,
					description:
						'Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.',
					category: 'business',
					picture:
						'https://cdn.vox-cdn.com/thumbor/KHQaDuNPbKGJn4GtYomrmoXKE1Q=/0x0:2000x1353/1400x1050/filters:focal(531x175:851x495):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/58029793/titaniccover.0.jpg',
					lastUpdated: '2021-02-14T23:10:19.134Z',
					votes: {
						positive: 418,
						negative: 324,
					},
				},
				{
					name: 'Cristina Fernández de Kirchner',
					id: 3,
					description:
						'Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.',
					category: 'politics',
					picture:
						'https://lh3.googleusercontent.com/cTrkeqOyed31hsaGW-Ich8xZP5ImayRR9xFQ7czAjoyiWrFHDl3cIbTnx_pgCsptkcEqxhvGk0sjcJQjW0pz',
					lastUpdated: '2020-12-10T23:41:07.120Z',
					votes: {
						positive: 45,
						negative: 97,
					},
				},
				{
					name: 'Malala Yousafzai',
					id: 4,
					description:
						'The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.',
					category: 'politics',
					picture:
						'https://c8.alamy.com/comp/T0KB79/gollum-the-lord-of-the-rings-the-return-of-the-king-2003-T0KB79.jpg',
					lastUpdated: '2020-12-10T23:41:07.120Z',
					votes: {
						positive: 18,
						negative: 3,
					},
				},
				{
					name: 'Elon Musk',
					id: 5,
					description:
						'In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.',
					category: 'business',
					picture:
						'https://img.discogs.com/343v2OSD56TjdoO_Fm5t0fO28qM=/fit-in/600x450/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3010888-1311606022.jpeg.jpg',
					lastUpdated: '2020-12-20T23:43:38.041Z',
					votes: {
						positive: 1237,
						negative: 894,
					},
				},
				{
					name: 'Greta Thumberg',
					id: 6,
					description:
						"Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
					category: 'environment',
					picture:
						'https://vignette.wikia.nocookie.net/doblaje/images/2/29/TS3poster-crowd.jpg/revision/latest/top-crop/width/360/height/450?cb=20200724211622&path-prefix=es',
					lastUpdated: '2021-02-26T23:44:50.326Z',
					votes: {
						positive: 118,
						negative: 45,
					},
				},
			])
		);
	}),
];
