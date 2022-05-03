const input = document.getElementById("input")
const len_mf = document.getElementById("len.mf")
const vol_lg = document.getElementById("vol.lg")
const mass_kp = document.getElementById("mass.kp")



//functions for computations
metersToFeet = a => a * 3.28084
feetToMeters = a => a * 0.3048
litersToGallons = a => a * 0.264172
gallonsToLiters = a => a * 3.785
kilosToPounds = a => a * 2.20462
poundsToKilos = a => a * 0.45359237

input.addEventListener("keyup", () => {
    if (input.value > -1 && input.value.length != 0){
        len_mf.textContent = `${input.value} meters = ${metersToFeet(input.value).toFixed(3)} feet | ${input.value} feet = ${feetToMeters(input.value).toFixed(3)} meters`
        vol_lg.textContent = `${input.value} liters = ${litersToGallons(input.value).toFixed(3)} gallons | ${input.value} gallons = ${gallonsToLiters(input.value).toFixed(3)} liters`
        mass_kp.textContent = `${input.value} kilos = ${kilosToPounds(input.value).toFixed(3)} pounds | ${input.value} pounds = ${poundsToKilos(input.value).toFixed(3)} kilos`
    } else {
        len_mf.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`
        vol_lg.textContent = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`
        mass_kp.textContent = `0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos`
    }
})

