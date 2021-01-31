async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  console.log(json)
  
  // 🔥 start here: write code to loop through the rides 
  for (let x=0; x<json.length; x++)  {
  let ride=json[x]
  if (ride.length > 1) {
    let levelOfService = "Noober Pool" 
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
    `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span> ${levelOfService} </span>
      </h1>
    `
    )
      for (let i=0; i<ride.length; i++)  {
        document.querySelector('.rides').insertAdjacentHTML('beforeend',
        `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
            <div class="flex">
              <div class="w-1/2">
                <h2 class="text-2xl py-1"> ${ride[i].passengerDetails.first} ${ride[i].passengerDetails.last} </h2>
                <p class="font-bold text-gray-600"> ${ride[i].passengerDetails.phoneNumber} </p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-gray-600 text-white p-2">
                  ${ride[i].numberOfPassengers} passengers
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                <p> ${ride[i].pickupLocation.address} </p>
                <p> ${ride[i].pickupLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip} </p>
              </div>
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p> ${ride[i].dropoffLocation.address} </p>
                <p> ${ride[i].dropoffLocation.city}, ${ride[i].pickupLocation.state} ${ride[i].pickupLocation.zip} </p>
              </div>
            </div>
          </div>
        `
        )
        }
  
  } else if (ride[0].purpleRequested == true) {
    levelOfService = "Noober Purple"
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
    `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span> ${levelOfService} </span>
    </h1>

    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1"> ${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last} </h2>
          <p class="font-bold text-gray-600"> ${ride[0].passengerDetails.phoneNumber} </p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
          ${ride[0].numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p> ${ride[0].pickupLocation.address} </p>
          <p> ${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip} </p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p> ${ride[0].dropoffLocation.address} </p>
          <p> ${ride[0].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip} </p>
        </div>
      </div>
    </div>
    `
    )

  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = "Noober XL"
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
    `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span> ${levelOfService} </span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1"> ${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last} </h2>
            <p class="font-bold text-gray-600"> ${ride[0].passengerDetails.phoneNumber} </p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[0].numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p> ${ride[0].pickupLocation.address} </p>
            <p> ${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip} </p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p> ${ride[0].dropoffLocation.address} </p>
            <p> ${ride[0].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip} </p>
          </div>
        </div>
      </div>
    `
    )
  } else {
    levelOfService = "Noober X"
    document.querySelector('.rides').insertAdjacentHTML('beforeend',
    `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span> ${levelOfService} </span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1"> ${ride[0].passengerDetails.first} ${ride[0].passengerDetails.last} </h2>
            <p class="font-bold text-gray-600"> ${ride[0].passengerDetails.phoneNumber} </p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[0].numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p> ${ride[0].pickupLocation.address} </p>
            <p> ${ride[0].pickupLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip} </p>
            </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p> ${ride[0].dropoffLocation.address} </p>
            <p> ${ride[0].dropoffLocation.city}, ${ride[0].pickupLocation.state} ${ride[0].pickupLocation.zip} </p>
            </div>
        </div>
      </div>
    `
    )
  }

}

}

window.addEventListener('DOMContentLoaded', pageLoaded)

