const container = document.querySelector("#itemList")

document.querySelector("#saveWishlist").addEventListener("click", event => {


    const wishlistItem = document.querySelector("#wishlistItem").value
    const location = document.querySelector("#location").value

    const wishlistForm = document.getElementById("wishlistItem")
    const locationForm = document.getElementById("location")

    if (wishlistForm.value === "") {
        
    alert("Please Enter All Information")

    } else {
        
        container.innerHTML += `
        <section>
            <h1>I can purchase ${wishlistItem} at ${location}</h1>
        </section>
    `
        wishlistForm.value = ""
        locationForm.value = ""
    }

})

