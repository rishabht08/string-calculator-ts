export function parseDelimiter(input: string): { delimiter: string, numbersString: string } {
    if (input.startsWith('//')) {
        const multiDelimiterCharMatch = input.match(/^\/\/\[(.+?)\]\n([\s\S]*)$/);
        if (multiDelimiterCharMatch && multiDelimiterCharMatch.length > 2) {
            const delimiter = escapeForRegex(multiDelimiterCharMatch[1]);
            const numbersString = multiDelimiterCharMatch[2];
            return { delimiter, numbersString };
        }

        const singleDelimiterCharMatch = input.match(/^\/\/(.+)\n([\s\S]*)$/);
        if (singleDelimiterCharMatch && singleDelimiterCharMatch.length > 2) {
            return {
                delimiter: escapeForRegex(singleDelimiterCharMatch[1]),
                numbersString: singleDelimiterCharMatch[2]
            };
        }
    }

    return {
        delimiter: ',|\n',
        numbersString: input
    };
}



function escapeForRegex(delimiter: string): string {
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
