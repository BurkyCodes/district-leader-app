import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  schoolName = signal('')
  principalName = signal('')
  tier = signal('')
}
