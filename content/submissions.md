---
layout: page.liquid
title: Submissions
description: How to submit to enbyfest
eleventyNavigation:
  key: Submissions
---
<form name="submissions" method="POST" data-netlify="true">
  <label class="required">
    <span>Name</span>
    <input type="text" name="name" autocomplete="name" required />
  </label>

  <label class="required">
    <span>Email</span>
    <input type="email" name="email" autocomplete="email" required />
  </label>

  <label class="required">
    <span>Film title</span>
    <input type="text" name="film-title" required />
  </label>

  <label class="required">
    <span>Genre</span>
    <select name="genre" required>
      <option value="narrative">Narrative</option>
      <option value="documentary">Documentary</option>
      <option value="experimental">Experimental</option>
      <option value="other">Other</option>
    </select>
  </label>

  <label class="required">
    <span>Type</span>
    <select name="role" required>
      <option value="short">Short</option>
      <option value="feature">Feature</option>
    </select>
  </label>

  <label class="required">
    <span>Runtime (minutes)</span>
    <input type="number" name="runtime" min="1" required>
  </label>

  <div class="field-center">
    <label class="required">
      <span>Film link (Vimeo, YouTube, download link, etc.)</span>
      <input type="text" name="url" placeholder="https://www.example.com" required />
    </label>
    <label>
      <span>Film link password</span>
      <input type="text" name="password" />
    </label>
  </div>

  <div class="field-center">
    <label class="checkbox">
      <span>Are you based in the SF Bay Area?</span>
      <input type="checkbox" name="bay-resident" />
    </label>
    <label class="checkbox">
      <span>Is the main subject matter nonbinary?</span>
      <input type="checkbox" name="nonbinary-film" />
    </label>
  </div>

  <label class="required">
    <span>Which of your crew members identify as nonbinary?</span>
    <textarea name="enby-crew" cols="33"></textarea>
  </label>

  <label>
    <span>Anything else?</span>
    <textarea name="message" cols="33"></textarea>
  </label>

  <button type="submit">Submit</button>
</form>