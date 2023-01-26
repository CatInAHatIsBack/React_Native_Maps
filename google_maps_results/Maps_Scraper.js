// done : 
// 	map
// 	marker
// 	subway
	
// todo: 
// 	pages
// 	scrape maps
// 	site: 
// 		picture
// 		name
// 		intro
// 		address
// 		website
// 		reviews
// 	filter: 
// 		-net::ERR_BLOCKED_BY_CLIENT



data = []
class listing {
    constructor(lat, long, image_link, title,intro, rating, num_reviews, address, image) {
        this.lat = lat
        this.long = long
        this.image_link = image_link
        this.title = title
        this.intro = intro
        this.rating = rating
        this.num_reviews = num_reviews
        this.address = address
        this.image = image
      
    }
}
function getListings() {
    let listings = document.querySelectorAll('.Nv2PK.THOPZb.CpccDe')
    let len = listings.length 
    console.log("listing length: " + len)
    let info = []
    let delay = 2000
    
    tester(listings, 0)

}

function tester(listings, index) {
    let len = listings.length 
    let info = []
    let delay = 2000 
    // if (index < len){
    //     listings[index].getElementsByTagName('a')[0].click()    
    //     console.log(getInfo()) 

    // }
    // for (let i = 0; i < len; i++) {
    //     // console.log(listings[i])
    //     setTimeout(() => { console.log(getInfo()) }, delay); 
    //     // console.log(getInfo())
    //     setTimeout(() => {
    //         console.log(getInfo()) 
    //         listings[i].getElementsByTagName('a')[0].click()   
    //     }, delay);
    //     // info.append(getInfo())
    //     // console.log(info)
    // } 
        setTimeout(() => {
            // Your logic here
            clicker(listings, index);
        }, delay);
}
function clicker(listings, index){
    let delay = 2000 
    let len = listings.length 
    console.log(index, len)
    if( index < len) {
        listings[index].getElementsByTagName('a')[0].click()
        setTimeout(() => {
            scrape(listings, index)
        }, delay); 
    }
}
function scrape(listings, index) {
    let delay = 2000 

    data.push(getInfo(index))
    console.log(data, index )
    setTimeout(() => {
        clicker(listings, index+1);
    }, delay); 
}
function getlatlong() {
    let url = document.URL
    url = url.split('@')
    test = url[1].split(',1')
    test = test[0]
    test = test.split(',')
    latitude = test[0]
    longitude = test[1]
    // console.log(latitude, longitude)
    return test 
}

function getInfo(index){
    let image_link = document.querySelector('.RZ66Rb.FgCUCc').getElementsByTagName('img')[0].currentSrc

    let title = document.querySelector('.DUwDvf.fontHeadlineLarge').textContent
    
    let intro = document.querySelector('.PYvSYb').textContent
    
    let rating = document.querySelector('.F7nice.mmu3tf').getElementsByTagName('span')[2].innerText
    
    let num_reviews = document.querySelector('.F7nice.mmu3tf').getElementsByTagName('span')[10].innerText
    
    let address = document.querySelector('.Io6YTe.fontBodyMedium').textContent
    let latlong = getlatlong()
    image = "./assets/" + index+1 + ".jpeg"
    new_listing = new listing(latlong[0],latlong[1], image_link, title,intro, rating, num_reviews, address, image)
    // console.log(new_listing)
    return new_listing
}
getListings()


