json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :title, :description, :room_id, :open_to_public
  json.start reservation.date + "T" + reservation.time_in + "-0500"
  json.end reservation.date + "T" + reservation.time_out + "-0500"
  json.url reservation_url(reservation, format: :html)
end
