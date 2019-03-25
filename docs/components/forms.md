---
id: forms
title: Forms
---

<div class="wrapCover">
    <figure class="coverBackground showAfter">
        <div class="background buttonsCover"></div>
    </figure>
    <figure class="coverImage showCover">
        <img src="../../img/buttons-cover.png">
    </figure>
</div>

## Inputs

Example:

<form>
	<div class="inputContainer">
		<img src="../../icons/icon-user.svg" alt="" />
		<input type="text" class="defaultInput" placeholder="Your name..." />
	</div>
	<div class="inputContainer">
		<img src="../../icons/icon-user.svg" alt="" />
		<input type="email" class="defaultInput" placeholder="Your e-mail..." />
	</div>
	<div class="inputContainer">
		<img src="../../icons/icon-password.svg" alt="" />
		<input type="password" class="defaultInput" placeholder="Your password..." />
	</div>
	<div class="inputContainer">
		<img src="../../icons/icon-password.svg" alt="" />
		<input type="password" class="defaultInput" placeholder="Confirm your password..." />
	</div>
	<div class="inputContainer">
		<img src="../../icons/icon-token.svg" alt="" />
		<input type="text" class="defaultInput" placeholder="Token confirmation..." />
	</div>
	<div class="inputContainer">
		<img src="../../icons/icon-telephone.svg" alt="" />
		<input type="tel" class="defaultInput" placeholder="Your phone number..." />
	</div>
</form>

Code:

```html
<div class="inputContainer">
  <img src="../../icons/icon-user.svg" alt="" />
  <input type="text" class="defaultInput" placeholder="Your name..." />
</div>
<div class="inputContainer">
  <img src="../../icons/icon-user.svg" alt="" />
  <input type="email" class="defaultInput" placeholder="Your e-mail..." />
</div>
<div class="inputContainer">
  <img src="../../icons/icon-password.svg" alt="" />
  <input type="password" class="defaultInput" placeholder="Your password..." />
</div>
<div class="inputContainer">
  <img src="../../icons/icon-password.svg" alt="" />
  <input
    type="password"
    class="defaultInput"
    placeholder="Confirm your password..."
  />
</div>
<div class="inputContainer">
  <img src="../../icons/icon-telephone.svg" alt="" />
  <input type="tel" class="defaultInput" placeholder="Your phone number..." />
</div>
```

## Search Input and Comment Input

Example:

<form>
	<div class="inputContainer">
		<button class="background-lightBlue">
			<img src="../../icons/icon-search.svg" />
		</button>
		<input type="text" class="contentInput" placeholder="Search what you want..." />
	</div>
	<div class="inputContainer">
		<button class="background-lightBlue">
			<img src="../../icons/icon-comment.svg" />
		</button>
		<input type="text" class="contentInput" placeholder="Comment here..." />
	</div>
	<div class="inputContainer">
		<button class="background-sharpBlues">
			<img src="../../icons/icon-send.svg" />
		</button>
		<input type="text" class="contentInput" placeholder="Type your message..." />
	</div>
</form>

Code:

```html
<div class="inputContainer">
  <button class="background-lightBlue">
    <img src="../../icons/icon-search.svg" />
  </button>
  <input
    type="text"
    class="contentInput"
    placeholder="Search what you want..."
  />
</div>
<div class="inputContainer">
  <button class="background-lightBlue">
    <img src="../../icons/icon-comment.svg" />
  </button>
  <input type="text" class="contentInput" placeholder="Comment here..." />
</div>
<div class="inputContainer">
  <button class="background-sharpBlues">
    <img src="../../icons/icon-send.svg" />
  </button>
  <input type="text" class="contentInput" placeholder="Type your message..." />
</div>
```

## Select Default

<form>
	<div class="selectContainerDefault">
		<select class="selectDefault">
			<option value="">Selecione uma opção</option>
			<option value="valor">1</option>
			<option value="valor">2</option>
			<option value="valor">3</option>
		</select>
	</div>
</form>

Code:

```html
<div class="selectContainerDefault">
  <select class="selectDefault">
    <option value="">Selecione uma opção</option>
    <option value="valor">1</option>
    <option value="valor">2</option>
    <option value="valor">3</option>
  </select>
</div>
```

## Select Transparent

<form class="w-100p background-white p-20px m-bottom-40px">
	<div class="selectContainerTransparent">
		<select class="selectTransparent">
			<option value="">Selecione uma opção</option>
			<option value="valor">1</option>
			<option value="valor">2</option>
			<option value="valor">3</option>
		</select>
	</div>
</form>

Code:

```html
<div class="selectContainerTransparent">
  <div class="selectContainerTransparent">
    <select class="selectTransparent">
      <option value="">Selecione uma opção</option>
      <option value="valor">1</option>
      <option value="valor">2</option>
      <option value="valor">3</option>
    </select>
  </div>
</div>
```

## Input File

Example:

<form action="">
	<div class="inputFileContainer">
		<input type="file" class="fileInput" />
		<div class="fileButton">
			<img src="../../icons/icon-camera.svg">
			<p>Insira o logo da empresa</p>
		</div>
	</div>
</form>

Code:

```html
<div class="inputFileContainer">
  <input type="file" class="fileInput" />
  <div class="fileButton">
    <img src="../../icons/icon-camera.svg" />
    <p>Insira o logo da empresa</p>
  </div>
</div>
```

## Company logo

Example:

<form action="">	
	<div class="Companylogo">			
		<p>Nome da empresa</p>	
	</div>
</form>

Code:

```html
<div class="Companylogo">
  <p>Nome da empresa</p>
</div>
```

## Radio

Example:

<form action="">
	<div class="inputContainer">
		<input checked type="radio" name="yourName" value="1" class="radioInput" />
		<div class="radioButton">
			<p>Choose your answer</p>
		</div>
	</div>
	<div class="inputContainer">
		<input type="radio" name="yourName" value="2" class="radioInput" />
		<div class="radioButton">
			<p>Choose your answer</p>
		</div>
	</div>
</form>

Code:

```html
<div class="inputContainer">
  <input type="radio" name="yourName" value="1" class="radioInput" />
  <div class="radioButton">
    <p>Choose your answer</p>
  </div>
</div>
<div class="inputContainer">
  <input type="radio" name="yourName" value="2" class="radioInput" />
  <div class="checkboxButton">
    <p>Choose your answer</p>
  </div>
</div>
```

## Checkbox

Example:

<form action="">
	<div class="inputContainer">
		<input type="checkbox" class="checkboxInput" />
		<div class="checkboxButton">
			<p>Check me</p>
		</div>
	</div>
	<div class="inputContainer">
		<input type="checkbox" class="checkboxInput" />
		<div class="checkboxButton">
			<p>Check me</p>
		</div>
	</div>
	<div class="inputContainer">
		<input type="checkbox" class="checkboxInput" />
		<div class="checkboxButton">
			<p>Check me</p>
		</div>
	</div>
	<div class="inputContainer">
		<input type="checkbox" class="checkboxInput" />
		<div class="checkboxButton">
			<p>Check me</p>
		</div>
	</div>
</form>

Code:

```html
<div class="inputContainer">
  <input type="checkbox" class="checkboxInput" />
  <div class="checkboxButton">
    <p>Check me</p>
  </div>
</div>
```
