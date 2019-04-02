import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Option } from './settings';
import { OptionService } from './settings.service';

@Component({
    selector: 'my-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class OptionsComponent implements OnInit {
    options: Option[];
    selectedOption: Option;

    constructor(
        private optionService: OptionService,
        private router: Router) { }

    getOptions(): void {
        this.optionService
            .getOptions()
            .then(options => this.options = options);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.optionService.create(name)
            .then(option => {
                this.options.push(option);
                this.selectedOption = null;
            });
    }

    delete(option: Option): void {
        this.optionService
            .delete(option.id)
            .then(() => {
                this.options = this.options.filter(h => h !== option);
                if (this.selectedOption === option) { this.selectedOption = null; }
            });
    }

    ngOnInit(): void {
        this.getOptions();
    }

    onSelect(option: Option): void {
        this.selectedOption = option;
    }

    gotoDetail(): void {
        this.router.navigate(['/option', this.selectedOption.id]);
    }
}
