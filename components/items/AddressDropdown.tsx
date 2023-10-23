"use client";
import React, { useEffect, useState } from "react";

function AddressDropdown({
  setSelectedCityName,
  setSelectedDistrictName,
  setSelectedWardName,
}: any) {
  const [cities, setCities] = useState<any>([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCityChange = (event: any) => {
    const selectedCityId = event.target.value;
    const selectedCityName =
      event.target.options[event.target.selectedIndex].text;
    setSelectedCityName(selectedCityName);
    setSelectedCity(selectedCityId);
    setSelectedDistrict("");

    if (selectedCityId) {
      const selectedCityData: any = cities.find(
        (city: any) => city.Id === selectedCityId
      );
      setDistricts(selectedCityData.Districts);
    } else {
      setDistricts([]);
      setWards([]);
    }
  };

  const handleDistrictChange = (event: any) => {
    const selectedDistrictId = event.target.value;
    const selectedDistrictName =
      event.target.options[event.target.selectedIndex].text;
    setSelectedDistrictName(selectedDistrictName);
    setSelectedDistrict(selectedDistrictId);

    if (selectedDistrictId) {
      const selectedCityData: any = cities.find(
        (city: any) => city.Id === selectedCity
      );
      const selectedDistrictData: any = selectedCityData.Districts.find(
        (district: any) => district.Id === selectedDistrictId
      );
      setWards(selectedDistrictData.Wards);
    } else {
      setWards([]);
    }
  };
  const handleWardChange = (event: any) => {
    const selectedWardName =
      event.target.options[event.target.selectedIndex].text;
    setSelectedWardName(selectedWardName);
  };
  return (
    <div className="grid grid-cols-2 gap-5">
      <select
        className="p-2 border border-mainorange outline-none bg-white"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="">Chọn tỉnh thành</option>
        {cities.map((city: any, idx: number) => (
          <option key={idx} value={city.Id}>
            {city.Name}
          </option>
        ))}
      </select>

      <select
        className="p-2 border border-mainorange outline-none bg-white"
        value={selectedDistrict}
        onChange={handleDistrictChange}
      >
        <option value="">Chọn quận huyện</option>
        {districts.map((district: any, idx: number) => (
          <option key={idx} value={district.Id}>
            {district.Name}
          </option>
        ))}
      </select>

      <select
        className="p-2 border border-mainorange outline-none bg-white"
        onChange={handleWardChange}
      >
        <option value="">Chọn phường xã</option>
        {wards.map((ward: any, idx: number) => (
          <option key={idx} value={ward.Id}>
            {ward.Name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddressDropdown;
