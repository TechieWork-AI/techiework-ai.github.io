document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("search-box");
    const results = document.getElementById("search-results");

    if (!input || !results) return;

    if (typeof lunr === "undefined" || typeof store === "undefined") {
        results.innerHTML = "<p>Search unavailable.</p>";
        return;
    }

    // Create lookup table
    const documents = {};

    store.forEach(doc => {
        documents[doc.url] = doc;
    });

    // Build index only once
    const idx = lunr(function () {

        this.ref("url");

        this.field("title", { boost: 10 });

        this.field("excerpt");

        this.field("categories");

        this.field("tags");

        store.forEach(doc => this.add(doc));

    });

    function render(hits) {

        if (hits.length === 0) {
            results.innerHTML = "<p>No results found.</p>";
            return;
        }

        let html = `<p>${hits.length} result(s)</p><ul>`;

        hits.forEach(hit => {

            const doc = documents[hit.ref];

            html += `
            <li class="search-item">
                <a href="${doc.url}">
                    <strong>${doc.title}</strong>
                </a>

                <div class="meta">
                    ${doc.categories || ""}
                </div>

                <p>${doc.excerpt}</p>
            </li>
            `;

        });

        html += "</ul>";

        results.innerHTML = html;
    }

    input.addEventListener("input", function () {

        const q = this.value.trim();

        if (!q) {
            results.innerHTML = "";
            return;
        }

        render(idx.search(q));

    });

});