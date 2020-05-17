const app = new Vue({
    el: '#container',
    data: {
        showCreateRoomModal: false,
        username: window.localStorage.getItem("username") || "Bober",
        rooms: []
    },
    // instead of `created` lifecycle hook, we can use `mounted`, if needed
    created: function() {
      this.fetchRooms()
    },
    methods: {
        fetchRooms: function() {
            fetch("/api/rooms")
                .then(response => response.json())
                .then(data => {
                    this.rooms = data.rooms;
                })
        },
        createRoom: function() {
            this.showCreateRoomModal = false;
            room_name = document.getElementById("room-name").value;
            room_seats = document.getElementById("room-seats").value;
            fetch(`/api/create?name=${room_name}&seats=${room_seats}`)
                .then(response => response.json())
                .then(data => {
                    this.connect(data.room_id)
                })
        },
        connect: function(id) {
            window.location.pathname = "game/" + id;
        }
    },
    watch: {
        username: function(newName) {
            window.localStorage.setItem("username", newName);
        }
    }
});
