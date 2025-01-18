// sum-issues-by-category.js
const fs = require('fs');
const path = './public';

const categoryMappings = {
    games: ['gorgon-issue-count.json', 'hoa-issue-count.json', 'spin-issue-count.json', 'angler-issue-count.json', 'hallow-issue-count.json'],
    apis: ['api-issue-count.json'],
    web: ['frontend-issue-count.json']
};

const categorySums = {
    games: { resolved_bugs: 0, resolved_documentation: 0, resolved_enhancements: 0 },
    apis: { resolved_bugs: 0, resolved_documentation: 0, resolved_enhancements: 0 },
    web: { resolved_bugs: 0, resolved_documentation: 0, resolved_enhancements: 0 }
};

fs.readdirSync(path).forEach(file => {
    if (file.endsWith('.json')) {
        const data = JSON.parse(fs.readFileSync(`${path}/${file}`, 'utf-8'));

        for (const [category, jsonFiles] of Object.entries(categoryMappings)) {
            if (jsonFiles.includes(file)) {
                categorySums[category].resolved_bugs += data.resolved_bugs || 0;
                categorySums[category].resolved_documentation += data.resolved_documentation || 0;
                categorySums[category].resolved_enhancements += data.resolved_enhancements || 0;
            }
        }
    }
});

fs.writeFileSync(`${path}/category-sum.json`, JSON.stringify(categorySums, null, 2));