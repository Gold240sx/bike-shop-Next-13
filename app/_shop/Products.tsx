// import JekyllSide from "../assets/Images/Products/Cannondale/Jekyll/side.png"
// import JekyllQuarter from "../assets/Images/Products/Cannondale/Jekyll/quarter.png"
// import JekyllCloseUp from "../assets/Images/Products/Cannondale/Jekyll/close-up.png"
// import AtalayaSide from "../assets/Images/Products/J-Guillem/Atalaya/side.jpg"
// import AtalayaFrame from "../assets/Images/Products/J-Guillem/Atalaya/frame.jpg"
// import AtalayaCloseUp from "../assets/Images/Products/J-Guillem/Atalaya/close-up.jpg"
// import JerseyBack from "../assets/Images/Products/Clothes/jersey-back.jpg"
// import JerseyFront from "../assets/Images/Products/Clothes/jersey-front.jpg"
// import JerseyQuarter from "../assets/Images/Products/Clothes/jersey-quarter.jpg"
// import ShortsButt from "../assets/Images/Products/Clothes/Shorts-Butt.jpg"
// import ShortsFront from "../assets/Images/Products/Clothes/Shorts-Front.jpg"
// import ShortsFly from "../assets/Images/Products/Clothes/Shorts-Fly.jpg"
// import FullFaceHelmetEuc from "../assets/Images/Products/Clothes/FoxHelmetEuc.jpg"
// import FullFaceHelmetBlocked from "../assets/Images/Products/Clothes/FoxHelmetBlocked.jpg"
// import FullFaceHelmetBlack from "../assets/Images/Products/Clothes/FoxHelmetBlack.jpg"
// import BikePump from "../assets/Images/Products/Accessories/Pump.jpg"

// export const Products = {
// 	Bikes: [
// 		{
// 			id: 1,
// 			name: "Jekyll",
// 			manufacturer: "Cannondale ",
// 			images: [JekyllSide, JekyllQuarter, JekyllCloseUp],
// 			price: 5999.99,
// 			category: "Enduro",
// 			tagline: "Rough and Roudy!",
// 			description: `The Cannondale Jekyll 1 Mountain Bike boasts a unique combo of a go-fast tech that's never been seen
//             before. This bike thrives in steep descents, rowdy mountains, & gets down at the bike park. Sure, it loves to climb with
//             the given 72.5° seat tube angle but Cannondale crafted the Jekyll to be a downhill ripper with a 64° head tube angle
//             & suspension layout that features a gravity cavity where the rear shock lives inside the downtube to provide a lower
//             center of gravity for the best handling to keep you planted through turns & stable at high speeds. The swingarm pivots
//             high on the seat tube so the rear wheel can move backwards & up when the trail gets chunky with roots & rocks so
//             you don't lose your momentum. The Guidler Pulley above the chainring takes care of all that pesky pedal kickback by
//             eliminating chain growth. The 4-bar linkage allows the bike to counteract rise & squat when you pedal & brake to give
//             you maximum traction through it all. The Jekyll uses Cannondale's Proportional Response to allow riders of all sizes to
//             enjoy all the goods as the bike's frame sizes are tailored to each the average rider's center of gravity for that specific
//              frame size. The Cannondale Jekyll 1 is a mountain bike made for the ones who wanna go fast - we'll see you at the
//             bottom!`,
// 			colorOptions: ["Green", "Tan", "Yellow"],
// 			sizeOptions: ["S", "M", "L", "XL"],
// 		},
// 		{
// 			id: 2,
// 			name: "Atalaya Gravel",
// 			manufacturer: "J Guillem",
// 			price: 4999.99,
// 			category: "Gravel",
// 			images: [AtalayaSide, AtalayaFrame, AtalayaCloseUp],
// 			tagline: "The nicest Bike we've ever ridden!",
// 			description: `With its ability to accommodate most 700c x 45mm and 27.5" x 2.1" tyres (w/o mudguards),
//             the Atalya Gravel is the frame for riders who want everything. It’s elegant, clean lines are accentuated and
//             strengthened by the addition of pre-cast components, centred around a one-piece bottom bracket-chain
//             stay system. The head tube is also cast and allows for full internal cable routing compatible with both mechanical
//             and di2 cables. And fully-cast, titanium drop outs allow for Flat Mount Disc Brake System, with thru axles. The
//             Atalaya is our state-of-the-art, do-it-all, go anywhere machine with a super versatility that doesn’t look out of
//             place however you use it: with mudguards and a small rack, or stripped of all its fixtures for use as a pure gravel bike.`,
// 			colorOptions: ["Titanium"],
// 			sizeOptions: ["M", "L"],
// 		},
// 		// Add more bikes here if needed
// 	],
// 	Clothes: [
// 		{
// 			id: 3,
// 			name: "Fox Racing Flexair Lunar Jersey Black",
// 			manufacturer: "Fox Racing",
// 			images: [JerseyFront, JerseyQuarter, JerseyBack],
// 			price: 64.99,
// 			category: "Tops",
// 			tagline: "A moisture-wicking jersey for comfortable rides.",
// 			description: `When you're bashing through that gnarly overgrown trail, the Flexair Jersey is right there with you
//                 bringing some legendary Fox energy to your trail exploration. It's got that sought-after Flexair
//                 breathability to keep you cool, TruDri® sweat-wicking ability, and construction details that'll ensure
//                 total mobility to dodge on a dime. Should you mistime your dodge, the abrasion-resistant sleeves and
//                  panels on the shoulder will guard your limbs against those errant trail flings.`,
// 			colorOptions: ["Yellow", "Blue", "Green"],
// 			sizeOptions: ["M", "XL"],
// 		},
// 		{
// 			id: 4,
// 			name: "MEN'S UNION 2.0 SHORT",
// 			manufacturer: "Chrome Industries",
// 			images: [ShortsFront, ShortsFly, ShortsButt],
// 			price: 93.75,
// 			category: "Bottoms",
// 			tagline: "Padded shorts for reduced friction and increased comfort.",
// 			description: `nspired by military shorts and mountain biking baggies, we made the Union Short to be functional and
//                 durable. Updated with urban cycling features, the Unions rock a second rear pocket with a hideaway
//                 reflective hit that only shows when you’re on the bike, a zip-close rear pocket and full-length gusset. Our
//                 durable 4-way stretch Everest fabric provides hours of comfort in the saddle or sitting on the grass at a show.`,
// 			colorOptions: ["Black"],
// 			sizeOptions: ["S", "M", "L"],
// 		},
// 		// Add more clothes here if needed
// 	],
// 	Accessories: [
// 		{
// 			id: 5,
// 			name: "Proframe Helmet",
// 			manufacturer: "Fox Racing",
// 			images: [FullFaceHelmetEuc, FullFaceHelmetBlocked, FullFaceHelmetBlack],
// 			price: 284.99,
// 			category: "Protective Gear",
// 			tagline: "DH Protection without compromise!",
// 			description: `As the lightest DH lid ever made by Fox, the Proframe comes with the same full-face, fixed visor protection of a
//                 classic DH bucket—albeit in a more streamlined design that won't leave you with your head hanging after an all-day
//                 ride. Its low weight means that even if you ride more towards the enduro end of the spectrum, you won't sacrifice
//                 time in a race for upgrading to DH-level protection. Fox also punches 24 Big Bore vents into the Proframe's shell,
//                 making sure you don't feel like you're trying to ride in an astronaut helmet when you're grinding it out on a long,
//                 rocky ridge climb before a serpentine descent.`,
// 			colorOptions: ["Eucalyptus", "Blocked Black/White", "Black"],
// 			sizeOptions: ["L"],
// 		},
// 		{
// 			id: 6,
// 			name: "Chamber Tubeless Floor Pump",
// 			manufacturer: "Blackburn.",
// 			images: [BikePump],
// 			price: 199.95,
// 			category: "Protective Gear",
// 			tagline: "A sturdy lock to keep your bike safe and secure.",
// 			description: "A sturdy lock designed to keep your bike safe from theft.",
// 			colorOptions: ["Black", "Silver"],
// 			sizeOptions: ["One Size"],
// 		},
// 		// Add more accessories here if needed
// 	],
// }

// https://i.ibb.co/1ngkR83/Fox-Helmet-Black.webp
// https://i.ibb.co/njZY2Wd/jersey-back.jpg
// https://i.ibb.co/HrWdbkB/jersey-front.jpg
// https://i.ibb.co/jWWVgsd/jersey-quarter.jpg
// https://i.ibb.co/1fLFMFt/Shorts-Butt.jpg
// https://i.ibb.co/BT2C4wf/Shorts-Fly.jpg
// https://i.ibb.co/hFMCpR0/Shorts-Front.jpg

// https://i.ibb.co/n7r2R6H/Cannondale-Logo.png
// https://i.ibb.co/6Wqj4b9/JGuillem-Logo.jpg
// https://i.ibb.co/SXgj7Q3/Norco-Logo.png
// https://i.ibb.co/7XvfXzt/Onyx-Banner.jpg
// https://i.ibb.co/jvt224V/onyxLogo.png
// https://i.ibb.co/zN40yzv/Propain-Logo-svg.png
// https://i.ibb.co/2nqnWnt/Scott-Logo.webp
// https://i.ibb.co/s1WkgNS/TrekLogo.png
// https://i.ibb.co/4RGvhjM/wtbLogo.png

// https://i.ibb.co/RbgvxhH/images.png
// https://i.ibb.co/HBv0C8K/Maxxis-Logo.png
// https://i.ibb.co/RPDfxyx/evil.png
// https://i.ibb.co/wCqBsnQ/22072-santa-cruz-bikes-logo-6.png
// https://i.ibb.co/k5Rhtd9/rockshox-logo.png
// https://i.ibb.co/Z6532SV/android-chrome-512x512.png
// https://i.ibb.co/HTbYDbJ/pivot.png
// https://i.ibb.co/XYHWNft/png-clipart-sram-corporation-bicycle-logo-cycling-bicycle-company-text.png
// https://i.ibb.co/SPpJnmB/marin-logo.png
// https://i.ibb.co/JyyTTNR/Shimano-Logo.jpg
// https://i.ibb.co/XWQZdbk/trickstuff.jpg
