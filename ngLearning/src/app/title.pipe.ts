import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(value: string, args?: any) {
        const skippedWords = ["of", "by", "the", "to", "is", "and", "a"];
        if (!value) {
            return null
        }
        var words = value.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (skippedWords.includes(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
            }
        }
        return words.join(" ");
    }
}