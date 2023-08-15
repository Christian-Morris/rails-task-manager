import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="complete-task"
export default class extends Controller {
  static targets = ["todo"];
  static values = {id: Number};

  connect() {
    console.log("Complete Task Controller Successfully Connected")
  }

  complete() {
    console.log(this.todoTarget)
    console.log(this.idValue)
    const url = `http://localhost:3000/tasks/${this.idValue}`

    const requestDetails = {
      method: "PATCH",
      body: JSON.stringify({completed: true})
    }

    fetch(url, requestDetails)

  }
}
