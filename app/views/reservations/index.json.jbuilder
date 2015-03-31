json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :title, :description
  json.start reservation.date + "T" + reservation.time_in
  json.end reservation.date + "T" + reservation.time_out
  json.url reservation_url(reservation, format: :html)
end
