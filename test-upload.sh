#!/bin/bash

# Create rooms with images from testimages folder

echo "Creating rooms with test images..."

# Room 1 with cw1.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Conference Room A" \
  description="Large conference room with projector" \
  image@./testimages/cw1.jpg

# Room 2 with cw2.jpg  
http --ignore-stdin -f POST :8000/rooms/ \
  name="Meeting Room B" \
  description="Small meeting room for 6 people" \
  image@./testimages/cw2.jpg

# Room 3 with cw3.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Board Room C" \
  description="Executive board room with video conferencing" \
  image@./testimages/cw3.jpg

# Room 4 with cw4.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Training Room D" \
  description="Training room with whiteboards" \
  image@./testimages/cw4.jpg

# Room 5 with cw5.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Lecture Hall E" \
  description="Large lecture hall with stadium seating" \
  image@./testimages/cw5.jpg

# Room 6 with cw6.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Collaboration Space F" \
  description="Open collaboration area with flexible seating" \
  image@./testimages/cw6.jpg

# Room 7 with cw7.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Video Conference G" \
  description="Dedicated video conference room with 4K cameras" \
  image@./testimages/cw7.jpg

# Room 8 with cw8.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Creative Studio H" \
  description="Creative studio with natural light and art supplies" \
  image@./testimages/cw8.jpg

# Room 9 with cw9.jpg
http --ignore-stdin -f POST :8000/rooms/ \
  name="Focus Room I" \
  description="Quiet focus room for individual work" \
  image@./testimages/cw9.jpg

# Define available tags
TAGS=("High-Speed Wifi" "Meeting Rooms" "Quiet Zones" "Pet Friendly" "Dual Monitors" "Whiteboard")

echo "Adding random tags to rooms..."

# Function to add random tags to a room
add_random_tags() {
  local room_id=$1
  local num_tags=$((RANDOM % 4 + 1))  # 1-4 tags
  
  for ((i=0; i<num_tags; i++)); do
    local random_tag="${TAGS[RANDOM % ${#TAGS[@]}]}"
    http --ignore-stdin POST :8000/tags/ tag="$random_tag" room:=$room_id
  done
}

# Add random tags to each room
add_random_tags 1
add_random_tags 2  
add_random_tags 3
add_random_tags 4
add_random_tags 5
add_random_tags 6
add_random_tags 7
add_random_tags 8
add_random_tags 9

echo "Done! Verify with: http --ignore-stdin :8000/rooms/"