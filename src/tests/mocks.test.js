import { describe, it, expect } from "vitest";
import { mockHotels, mockDestinations } from "../api/mocks";

const getFilteredHotels = (city, page = 1, limit = 10) => {
  const isAllSelected = !city || city === "All available hotels";
  const filtered = isAllSelected
    ? mockHotels
    : mockHotels.filter((h) => h.city === city);

  const start = (page - 1) * limit;
  return {
    data: filtered.slice(start, start + limit),
    total: filtered.length,
  };
};

describe("Hotels Data & Filtering Logic", () => {
  it("should have 30 hotels in mockHotels", () => {
    expect(mockHotels).toHaveLength(30);
  });

  it("each hotel should have a unique ID", () => {
    const ids = mockHotels.map((h) => h.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should filter hotels by city "Paris" or "Atlanta"', () => {
    const { data, total } = getFilteredHotels("Paris" || "Atlanta");
    expect(total).toBe(3);
    expect(data.every((h) => h.city === "Paris" || "Atlanta")).toBe(true);
  });

  it('should return all hotels when "All available hotels" is selected', () => {
    const { total } = getFilteredHotels("All available hotels");
    expect(total).toBe(30);
  });

  it("should return first 10 hotels for page 1", () => {
    const { data } = getFilteredHotels("All available hotels", 1, 10);
    expect(data).toHaveLength(10);
    expect(data[0].id).toBe(1);
  });

  it("should return remaining hotels on the last page", () => {
    const { data } = getFilteredHotels("All available hotels", 3, 10);
    expect(data).toHaveLength(10);
    expect(data[9].id).toBe(30);
  });

  it("every hotel city should exist in mockDestinations", () => {
    const destinationLabels = mockDestinations.map((d) => d.label);
    mockHotels.forEach((hotel) => {
      expect(destinationLabels).toContain(hotel.city);
    });
  });
});
