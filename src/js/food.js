document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[name="type"]');
    const districtSelect = document.getElementById("district-select");
    const restaurants = document.querySelectorAll(".Restaraunt");

    function filterRestaurants() {
        const selectedTypes = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);

        const selectedDistrict = districtSelect.value;

        restaurants.forEach(rest => {
            const restType = rest.getAttribute("data-type");
            const restDistrict = rest.getAttribute("data-district");

            const matchesType = selectedTypes.length === 0 || selectedTypes.includes(restType);
            const matchesDistrict = selectedDistrict === "" || restDistrict === selectedDistrict;

            rest.style.display = (matchesType && matchesDistrict) ? "flex" : "none";
        });
    }

    checkboxes.forEach(cb => cb.addEventListener("change", filterRestaurants));
    districtSelect.addEventListener("change", filterRestaurants);
});
