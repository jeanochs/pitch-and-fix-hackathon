# Notes of Changes and Suggested Upgrades

**<center>Pitch-and-Fix Hackathon</center>**

## Formatting of .env file

This server requires a .env file to run.
I have provided a template (`.env_template`) that can be edited and renamed for usage.

The field meaning are explained below.

1. HOST - Address where the Postgres database server is listening. Default is "localhost."
2. PORT - Port where the Postgres database server is listening. Default is 5432.
3. DBUSER - User name used with the Postgre database server.
4. PASSWORD - Password for the Postgre database user.
5. DATABASE - Name of the Postgre database.
*Optional*
6. LOCAL_ADDRESS - Second additional address that server can listen on. This can be blank.
7. LOCAL_PORT - Second additional port that the server can listen on. This can be blank.

## Bug Reports

04/29/2025 - Missing Stars

There are no rating stars in the actual webpage, even though it is coded in. 

Upon further investigation, the stars are not in this codebase *at all* (past the mentioning in the HTML files).
Grepping for the class names brings up nothing. 
So, I will have to add these myself, apparently. 

Upon a single search, these stars are a part of the Font Awesome stylesheet.
(I **really** need to take these HTML/CSS classes.)

I looks as if these classes are misspelled...

Even simpler; the stylesheet is not even included. 
The main website wants me to download it, but I'd rather use a CDN.

Found one: [BootstrapCDN](http://www.bootstrapcdn.com/#tab_fontawesome)

Nevermind; trying to find a CDN was too hard; I just downloaded a dependency and placed it into the css/ folder. 
Stuff works now;

(Also fixed a minor issue with a misnamed half star.)


<hr>

04/29/2025 - Messed up Input

Newsletter input is messed up. 

<center>Code Snippet</center>

```
<input type="email" placeholder="Enter your email' required id="newsletter-email">
                                            _____^_____Huge issue here. 
<button type="submit">Subscribe</button>

```

Quickly fixed by changing the "'" to an '"'. 

<hr>

04/30/2025 - "Active" class does not work

The active thing is not taking effect on the link. 
The code snippet is below.

```
<li id="nav-item"><a href="index.html" class="active">Home</a></li>

```

The `class="active"` does not actually work.

<hr>

04/30/2025 - Links don't actually work

When I'm on the products page, the `home` link doesn't actually take me back home. 

The URL from the Products page doesn't show the correct link:

```
file://.../pitch-and-fix-hackathon/pages/index.html

```

Instead, it should be:

```
file://.../pitch-and-fix-hackathon/index.html

```

Not really familiar with this issue; the link is correct to my knowledge: `<li id="nav-item"><a href="index.html" class="active">Home</a></li>`

I will see...

From further investigation, the CSS shows this:

```
.nav-item a.active,
.nav-item a:hover {
  color: #0078d4;
}

```

So, on hover, it should work. 
It doesn't though. 
Need to see what the issue is.

From the above, `nav-item` is marked as an `id`, but it *should* be a class. 



<hr>



## 04/29/2025

Looked at website; looks cool but is woefully unfinished.
Have a lot of work to do.
For tonight, will find more images to put inside of the boxes on the homescreen. 
Will need to work on the other pages later today. 

### Images - Citations Here

Fpund a smattering of pictures for the first four things on the menu. 
Posting the links here. 

Wireless Headphones - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fheadphones&psig=AOvVaw1rlf08HMMkgtznTE95WMc0&ust=1745988832082000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCLj54cu5_IwDFQAAAAAdAAAAABAE)

Smart Watch - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsmartwatch&psig=AOvVaw057ozWlLMIAi_PfDjNk-L7&ust=1745988916552000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCLDO39q5_IwDFQAAAAAdAAAAABAE)

Bluetooth Speakers - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fbluetooth-speaker&psig=AOvVaw0X452jk9oHvB8kHjjVdK1b&ust=1745988936815000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNDtqey5_IwDFQAAAAAdAAAAABAE)

Laptop Bag - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flaptop%2520bag%2F&psig=AOvVaw0aEVnIVjk7vsRJLrZETVxb&ust=1745988969154000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKiB5fi5_IwDFQAAAAAdAAAAABAb)

For the *Shop by Category* section of this website, I will manually make a four-photo collage. 
Like some Amazon stuff. 
this means there will be about 16 photos, so get ready. 

**<center>Eletronics Panel</center>**

R1, C1 (Wireless Earbuds) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fwireless-headphones-cutout&psig=AOvVaw1rlf08HMMkgtznTE95WMc0&ust=1745988832082000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPiXvce7_IwDFQAAAAAdAAAAABAE)

R1, C2 (Laptop) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flaptop%2F&psig=AOvVaw37MUgEnNv75_H63PpTmhpR&ust=1745989364060000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJixp8-7_IwDFQAAAAAdAAAAABAE)

R2, C1 (iPhone Charger) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fiphone-charger&psig=AOvVaw2EtHfoo9ju_0dU7rgh8LfV&ust=1745989389642000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCIjXm9S7_IwDFQAAAAAdAAAAABAh)

R2, C2 (Camera) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcamera&psig=AOvVaw0cbOLdPfhci3vqB-UI3vYl&ust=1745989498651000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJDen_K7_IwDFQAAAAAdAAAAABAE)

**<center>Clothing Panel</center>**

R1, C1 (Men's shirt) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fdress-shirt&psig=AOvVaw0pblKpiY-8FxnDSXEZrPkw&ust=1745989565278000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCICDzJy8_IwDFQAAAAAdAAAAABAE)

R1, C2 (Women's Dress) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdress&psig=AOvVaw0SOkoYwTLZrv4UbG8qsHHL&ust=1745989604172000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKjb77i8_IwDFQAAAAAdAAAAABAE)

R2, C1 (Dress Shoes) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdress-shoe&psig=AOvVaw2euZfWL3n6OG2q95lNlBax&ust=1745989675918000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMj0x8a8_IwDFQAAAAAdAAAAABAI)

R2, C2 (Pajamas) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fpyjamas&psig=AOvVaw3J6SyeGJrlac5TGa3rc8rV&ust=1745989714687000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCLjWgdi8_IwDFQAAAAAdAAAAABAE)

**<center>Sports and Outdoor Panel</center>**

R1, C1 (Football) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Ffootball.html&psig=AOvVaw1ZpWLUnVevB1oS2V-ylok4&ust=1745990204135000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPC9qcq-_IwDFQAAAAAdAAAAABAE)

R1, C2 (Grill) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Ffree3d.com%2F3d-model%2Fkamado-style-bbq-grill-closed-3829.html&psig=AOvVaw1QyjmFzJ7neT8Bsi8xeVUX&ust=1745990250190000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKjZwt2-_IwDFQAAAAAdAAAAABAE)

R2, C1 (Tent) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Ffree3d.com%2F3d-model%2Fcamping-tent-8814.html&psig=AOvVaw1eTrfa5A1rmQsrFFpyq3Dp&ust=1745990294075000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCIiYzeu-_IwDFQAAAAAdAAAAABAV)

R2, C2 (Patio Chair) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Foutdoor-chair&psig=AOvVaw0Oy7nqvnwsiqWfOS7qgwJR&ust=1745990355380000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNCBxom__IwDFQAAAAAdAAAAABAE)

**<center>Home and Kitchen Panel</center>**

R1, C1 (Kitchen Pot) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcooking-pot-on-white&psig=AOvVaw0bTUWZoqHgQh8mA4i2ZaNr&ust=1745990050337000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCIjk5vm9_IwDFQAAAAAdAAAAABAE)

R1, C2 (Blender) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblender&psig=AOvVaw2LAsECPIp-_54CYFzoRN_u&ust=1745990096826000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJjDz42-_IwDFQAAAAAdAAAAABAE)

R2, C1 (Cutlery) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcutlery&psig=AOvVaw1s-Ai_248l1ZKDoDtvQt4c&ust=1745990128198000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMjKwZ2-_IwDFQAAAAAdAAAAABAE)

R2, C2 (Air Fryer) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fair-fryer&psig=AOvVaw3ka0U5lKtHQc2FYyvEVTKT&ust=1745990164739000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMjwlrW-_IwDFQAAAAAdAAAAABAE)


These 16 photos are combined into a 2000 by 2000 sized collage. 

Done. 
The thing looks beautiful.
A Photo is truly worth 1000 words. 

Now, my last act of magic for tonight is to make a scrolling collage for the banner of the main page. 
It'll just be some basic photos of women shopping and stuff; good old boring boilerplate. 

The HTML won't be a problem, but the JS for this might be a bit annoying. 

*CSS delivers again.*
Can apparently use an attribute called keyframes and the `animation` attribute.

**<center>Images for Hero Banner Carousel</center>**

Slide 1 (Happy Shopper Woman) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fdissolve.com%2Fstock-photo%2FPortrait-laughing-woman-shopping-bags-coffee-royalty-free-image%2F101-D2115-221-666&psig=AOvVaw2Mk71JYWt1nes71Yc6351T&ust=1745993558543000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMCdooHL_IwDFQAAAAAdAAAAABAU)

Slide 2 (Mall) - [link](https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fcategory%2Fshopping-malls%2F101&psig=AOvVaw2xAiapIDb5FYODXE67xGxx&ust=1745993621842000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCMD9jLzS_IwDFQAAAAAdAAAAABAE)

Noticed the first **real** bug.
The rating stars don't show up. 
Need to keep an eye out for more things...

<hr>

## 04/30/2025

Now, the design of the additional pages are beginning. The goal is to finish *all* of the pages. 
The `Products` page will be a simple 3-rowed listing of multiple products. 
I plan to use server-side functionality to load the products automatically, but that'll come later.

The `Categories` page will be four additional categories from the original four on the front page.
This will probably be client-sided only. 

The `About Us` page is the most annoying part, but I will work on it. 
(Eric says that lorem ipsum can be used, so I will take this.)

Finally, the `Contact` page will be a centered page with dummy numbers, names, and addresses. 

I will try to complete this in around an hour and give a scaffolding for production and preparation for backend functionality. 

Now, beginning the editing. 

## 05/03/2025

Alright. 
Two days and the hackathon is prety much over.
Great. 
Finals killed my time, so it's time to MacGuyver this. 

I only know the Flask framework, but I will need to d a lot of reading to figure out equivalent frameworks for static serving and templating with Node.
Will also need to roll my database, but this will be quick.

Found Express.js to be the *de facto* web server.
EJS seems to be used for templating. 
Time to learn by doing. 

Objectives for a backend are the same. 
Got about 6 hours to roll this. 

**<center>Later Today...</center>**

Finished the products listing and database integration in full.
(Proud of how quickly I was able to adapt; was daunting at first.)

Now, need to put the finishing baubles on the website.
Currently, there are no product pages for each product. 
I'm going to do a *highly* general lorum ipsem page, with the only changing detail being the pictures and the description. 

But first, I need to update the `About Us`  and `Contact` pages.
I am going for a sleek, minimalist, but modern look. 
I asked ChatGPT for inspirations, and it gave me some options from popular websites. 
I will post the two website that what I would like to emulate. 

*For the `About Us` page:*

[AirBnB](https://news.airbnb.com/about-us/)

*For the `Contact` page:*

[Miro](https://miro.com/)

The Miro page will be simplified greatly, but the lightness will be maintained.

AirBnb's website is *perfect*; will be changing the style and layout. 

**<center>Two hours before deadline</center>**

Welp, that's it for today. 
Did my best with the incredibly limited time that I had. 
Will continue to cover HTML/CSS more as time permits.

Now, I need to prepare the Loom video, save the database table, and perform the final commits. 

### Products Page

Now, the products page is (*right now*) straightforward. 
Thanks to the CSS templates, the template card is already ready to go. 
This is then just a matter of duplication. 

For now, there will be *no* customization of the product page; this will be handled by the backend.
For now, the stuff is there.

### Categories Page

Currently, the following categories exist:

1. Electronics
2. Clothing
3. Home and Kitchen
4. Sports and Outdoors

The two categories that will be added are the following:

1. Books
2. Stationary

(I *may* add more categories if I have the time.)

Like the products page above, this should be a duplication thing. 

Ahhhhh - just realized. 
I have to make individual pages for **each of these.**
This will have to be handled by the backend to serve this pages. 
A database will need to be made as well, so the front end needs to be done and cleaned by tomorrow.

### About Us Page

Not going to lie; I am not creative at all, and it's near 3 in the morning. 
This will half-done right now, then I will go back through. 

It's somewhat sad, but I will put text up there.

I used a lorem ipsum generator, and just copied and pasted something. 
I needs a lot of stuff; photos, padding, etc.

Need to go online and find some examples to generate a simple, but aesthetic, page.

### Contact Page

Same thing as the `About Us` page.
Added some basic text with no formatting. 
Will again look at some pages for inspiration for a simple, aesthetic page. 

### Further Additions

Got some things that I will try to do before bed.

1. Make sure all of the links are working. 
    Forgot that the links are completely relative.
    Since this is a client-sided redirection, the links must back out first.

2. Fix the `active` tag.
    The `active` class will be redone; the active, non-hovering link will be given a good background.
    Upon hover, the thing should darken.
    I'll probably change this, but this'll do so far.
    Will also redesign the links later.

3. Fix the stars.
    The CSS will need to be updated. 
    This is pretty trivial.

4. Compressed the `nav-item` id into the `nav-item` class.
    To call `nav-item` an `id` is improper. 
    All attributes are in the class now. 


