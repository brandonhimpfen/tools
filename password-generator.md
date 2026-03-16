---
layout: default
title: Password Generator
description: Generate a random password using selected character sets.
permalink: /password-generator/
tool_js: /assets/js/tools/password-generator.js
---


<section class="py-5"><div class="container"><div class="row g-5">
<div class="col-lg-7"><span class="eyebrow">Utility Tool</span><h1 class="display-6 fw-bold mt-2 mb-3">Password Generator</h1><p class="text-secondary">Generate a random password using the character sets you want to include.</p>
<div class="tool-form card border-0 shadow-sm p-4 mt-4"><div class="row g-3">
<div class="col-md-6"><label class="form-label" for="passwordLength">Number of characters</label><input id="passwordLength" class="form-control" type="number" min="4" max="128" value="16"></div>
<div class="col-md-6 d-flex align-items-end"><button class="btn btn-brand w-100" id="generatePasswordBtn" type="button">Generate password</button></div>
<div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="checkbox" id="includeUppercase" checked><label class="form-check-label" for="includeUppercase">Include uppercase letters</label></div></div>
<div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="checkbox" id="includeLowercase" checked><label class="form-check-label" for="includeLowercase">Include lowercase letters</label></div></div>
<div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="checkbox" id="includeNumbers" checked><label class="form-check-label" for="includeNumbers">Include numbers</label></div></div>
<div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="checkbox" id="includeSpecialChars" checked><label class="form-check-label" for="includeSpecialChars">Include special characters</label></div></div>
<div class="col-12"><div class="form-check"><input class="form-check-input" type="checkbox" id="includeWords"><label class="form-check-label" for="includeWords">Blend in dictionary-style letters</label></div></div>
<div class="col-12"><label class="form-label" for="generatedPassword">Generated password</label><input id="generatedPassword" class="form-control" type="text" readonly></div>
</div></div>
</div>
<div class="col-lg-5"><div class="report-card rounded-4 p-4 shadow-sm"><h2 class="h4 mb-3">Note</h2><div class="report-box"><p class="mb-0">This is a lightweight browser-based generator. Use a password manager for storage and account-specific password hygiene.</p></div></div></div>
</div></div></section>