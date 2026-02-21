const form = document.querySelector("form")
const bmiValue = document.querySelector("#bmi-value")
const bmiCategory = document.querySelector("#bmi-category")


form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)

    if (!height || height <= 0) {
        bmiCategory.textContent = "Please enter valid height"
        return
    }

    if (!weight || weight <= 0) {
        bmiCategory.textContent = "Please enter valid weight"
        return
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2)

    bmiValue.textContent = bmi

    if (bmi < 18.6) {
        bmiCategory.textContent = "Underweight"
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        bmiCategory.textContent = "Normal Weight"
    } else {
        bmiCategory.textContent = "Overweight"
    }
})
