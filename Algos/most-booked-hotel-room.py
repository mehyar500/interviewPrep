#Given a hotel which has 10 floors [0-9] 
#and each floor has 26 rooms [A-Z]. 
# You are given a sequence of rooms, where + suggests room is booked, - room is freed. 
# You have to find which room is booked maximum number of times.
# 
#Input: ["+1A", "+3E", "-1A", "+4F", "+1A", "-3E"]
#Output: "1A"
#Explanation: 1A as it has been booked 2 times.
#
# solution
# One pass keeping track of everything needed.
# Time: O(n); space: O(1) because the total number of rooms is a constant.

def most_booked(bookings):
    counts = {}
    max_cnt, max_room = 0, None

    for booking in bookings:
        if booking[0] == "+":
            counts[booking] = counts.get(booking, 0) + 1
            if counts[booking] >= max_cnt:
                max_cnt = counts[booking]
                if max_room is None or booking < max_room:
                    max_room = booking[1:]
  
    return max_room