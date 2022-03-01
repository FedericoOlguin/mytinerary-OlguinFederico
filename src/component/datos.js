const datos = [
    {
        id: 1,
        ciudad: "Kyoto",
        imagen: "KyotoJapon.jpg",
        description: `Majestic and delicate, friendly and proud, deceitful and kind, haunting and serene, modern and classic, simple and ritual describe Kyoto.
         It has been called a lucky city as it has saved from all bombings. 
        Kyoto (and its people) is not only harmony, tranquillity and tradition, it displays a great respect for the environment, and focus in the progress but paying 
        attention on its past. It is proud to bear its significant cultural standing: imperial capital for more than 1000 years. Their people have made living an art 
        and do so at a leisurely pace, embracing and enjoying life.`,
        pais: "Japan"
    },
    {
        id: 2,
        ciudad: "Dubrovnik",
        imagen: "DubrovnikCroatia.jpg",
        description: `In Dubrovnik we will not only find beautiful stone beaches with an unusual charm, but also a cultural offer for those who want to enjoy a 
        place full of elegance, buildings that will take us back to a time when luxury and ostentation were the protagonists.`,
        pais: "Croatia"
    },
    {
        id: 3,
        ciudad: "Islands Lofoten",
        imagen: "IslasLofotenNoruega2.jpg",
        description: `Touring the Lofoten Islands along with their neighboring Vesterålen archipelago, in Norwegian Lapland, is one of the best proposals for traveling during the
         summer that I can think of. The permanent company of light thanks to the suggestive and enigmatic midnight sun becomes even more bearable when you are contemplating some
          of the most beautiful landscapes on the European continent. Between peaks that capriciously draw the mountains, slopes where the green shines and almost blinds after months
           covered by darkness and snow, countless lonely and cold beaches as well as endearing fishing villages equipped with red and yellow cabins next to the dryers of Cod.`,
        pais: "Norway"
    },
    {
        id: 4,
        ciudad: "Amsterdam",
        imagen: "AmsterdamPaisesBajos.jpg",
        description: `Amsterdam is one of the most entertaining capitals in Europe. A city for all audiences in which you can be cruising the canals as soon as you can cycle through its 
        streets or absorb all the knowledge and culture in one of its many museums.`,
        pais: "Netherlands"
    },
    {
        id: 5,
        ciudad: "Phuket",
        imagen: "PukhetTailandia.jpg",
        description: `A palm-lined paradise of pristine beaches, exotic wildlife and cocktails on tap, Phuket is the main act of southern Thailand. Jutting out into the Andaman Sea, this 
        sland is Thailand's largest and busiest, and while the rush of tourists in high season can be overwhelming, its popularity is well deserved. The capital, Phuket Town, is the obvious
         starting point, with its bustling markets and non-stop nightlife.`,
        pais: "Thailand"
    },
    {
        id: 6,
        ciudad: "Rhodes",
        imagen: "RhodesIslandGreece.jpg",
        description: `The most popular of the Dodecanese Islands and one of the most popular of all the Greek islands, Rhodes is a multifaceted place, almost like a small country,
         with a history that has stirred romantics for centuries. It also has some of the best beaches, archaeological sites, restaurants and nightlife in Greece.`,
        pais: "Greece"
    },
    {
        id: 7,
        ciudad: "Islands San Blas",
        imagen: "IslasSanBlasPanama.jpg",
        description: `A land that radiates life, perfectly imperfect, and full of authenticity. Where North and South meet, the old and new worlds converge, and cosmopolitan landscapes live in harmony with wild and untamed rainforests.
        A country for those who seek beyond what is expected, which challenges you to see more. Try more. Connect more. Feel more. A place for those who yearn for more stimulation, connection and transformation. Panama is not the destination,
         but the journey to discover more of what really matters.Create unforgettable memories through an explosion of inspiration and purpose. And let the spirit of Panama awaken
          in you the sense of belonging.`,
        pais: "Panama"
    },
    {
        id: 8,
        ciudad: "Villa La Angostura",
        imagen: "VillaLaAngostauraArgentina.jpg",
        description: `Located in the heart of the Tres Parques Siete Lagos region, in total harmony with the Nahuel Huapi National Park and the water mirrors that characterize this
         region: Lake Nahuel Huapi, Lake Correntoso and Lake Espejo.This mountain village is connected to the Quetrihue Peninsula through the Isthmus known as "La Angostura",
         from which the town takes its name, whose peculiarity is that it constitutes the land entrance gate to Los Arrayanes National Park, in the that is the only pure Arrayanes 
         Forest of that tree species on the planet. Villa la Angostura is framed in a unique natural environment, free of contamination, in which the four seasons are perfectly 
         differentiated. This makes it possible to offer changing natural settings in which a wide variety of activities can be carried out throughout the year.`,
        pais: "Argentina"
    },
    {
        id: 9,
        ciudad: "Sa pa",
        imagen: "SaPaVietnam.jpg",
        description: `In the North of Vietnam, in the mountains of the province of Lào Cai, there is a city at 1600 meters above sea level, **Sapa (or Sa Pa, in Vietnamese)**. 
        Home to some of the oldest ethnic minorities in Vietnam, such as the Hmong or the Zai, Sapa is the ideal destination for lovers of mountains, ancient cultures, hiking and nature.
        If you want to lose yourself at the top of these round-topped mountains, whose slopes are made up of terraces of cultivated rice that give a unique shape to its orography, and
         where the weather changes from one moment to another and without prior notice, then this is a place you should not miss. Above all, if you do it with the help of a Hmong guide showing you the way.`,
        pais: "Vietnam"
    },
    {
        id: 10, ciudad: "Fairbanks",
        imagen: "FairbanksAlaska.jpg",
        description: `Alaska's Heart of Gold, where summer brings the midnight sun, the elusive Northern Lights illuminate the dark sky, and unique environmental features, including 
        hot springs and miles of snowy tundra, offer a wide variety of outdoor activities free. Venture deeper into this city or explore the surrounding areas and go snowmobiling, 
        rafting, skiing or go dog sledding, a signature Fairbanks activity. From must-see museums big and small to breweries, eclectic shops, festivals and fresh local cuisine, 
        Alaska's second-largest city is a unique place in the world to explore.`,
        pais: "Alaska"
    },
    {
        id: 11, ciudad: "Edimburgo",
        imagen: "EdimburgoScotland.jpg",
        description: `Located on the east coast of Scotland, the city of Edinburgh is a beautiful destination to go to for a beautiful holiday. It sits above the Fjord of the River Forth,
         which gives it much of its charm. Being by the sea, it has a large port. There is also an extensive territory of fertile land that graces the surroundings of the Scottish capital.`,
        pais: "Scotland"
    },
    {
        id: 12, ciudad: "Matamata",
        imagen: "MatamataNewzeland.jpg",
        description: `On the North Island of New Zealand, halfway between the cosmopolitan city of Auckland and the immense waters of Lake Taupo, is one of those magical places that transports 
        you to an unreal world. Almost two decades ago Matamata ceased to be such, to become Hobbiton, one of the main enclaves of the novels of the great J. R. R. Tolkien, The Hobbit and The 
        Lord of the Rings.`,
        pais: "New Zealand"
    },
    {
        id: 13, ciudad: "San Francisco",
        imagen: "SanFranciscoEEUU.jpg",
        description: `San Francisco is a city famous for the Golden Gate Bridge, cable cars and Chinatown. The California Gold Rush of 1848 propelled the city into a period of rapid growth 
        and today ‘San Fran’ is a popular international tourist destination with people flocking to visit Alcatraz, Conservatory of Flowers and to experience the eclectic mix of historic, 
        Victorian and modern architecture.`,
        pais: "United States"
    },
    {
        id: 14, ciudad: "Paris",
        imagen: "ParisFrancia.jpg",
        description: `Its monuments, museums, shops, squares and gardens captivate millions of tourists every year. Known as the "City of Love", perhaps it is because it is chosen by thousands 
        of couples every year as a romantic destination or perhaps simply because every tourist who walks its streets falls in love with it.
        Another nickname is the "City of Light", and precisely its main monument, the Eiffel Tower, serves as a beacon that illuminates the Parisian nights.`,
        pais: "Paris"
    },
    {
        id: 15, ciudad: "Ciudad del Cabo",
        imagen: "CiudadDelCaboSudafrica.jpg",
        description: `Describing Cape Town in a few words is impossible, because it is too many things at once: overwhelming nature, a unique location with Table Mountain presiding over the 
        landscape, a refined gastronomy and wine culture, a temperate climate throughout the anus. Not entirely convinced? The South African capital is also the epicenter of African design 
        where creators and stylists compete to leave their mark on hotels and restaurants, from the colorful Afro-chic to the most avant-garde style.`,
        pais: "Cape Town"
    }
]

export default datos