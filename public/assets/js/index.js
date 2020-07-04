$(function () {
  $(".devour-status").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");

    const devourStatus = $(this).data("devourstatus");

    const newDevourState = {
      devoured: devourStatus,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed to", devourStatus);
      location.reload();
    });
  });

  $(".new-burger").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      name: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function (result) {
      console.log(location);
      window.location.reload();
    });
  });
});
