module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/stable/stable-website/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/c9a9a_2189abb2._.js",
  "chunks/[root-of-the-server]__eff64b75._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/stable/stable-website/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];