import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
contactWhatsApp() {
  // Replace '1234567890' with your full phone number including country code
  // Example: 923001234567 (for Pakistan) or 14155552671 (for USA)
  const phoneNumber = '923342557280'; 
  
  // Optional: Add a pre-filled message
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, '_blank');
}
}
