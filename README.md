# jspopup
## Introduction
UrlSearch  is a simple 
## Installation 

```javascript
<script src="./UrlSearch.js"></script>
```

## Usage
1. If you want to extract the protocol from the link, use

```javascript
<script>

  console.log(UrlSearch.protocol());//file or http or https 

</script>
```

________________________________________________________________

2. If you want to extract the domin name from the link, use

```javascript
<script>

  console.log(UrlSearch.domin());//www.example.com

</script>
```

________________________________________________________________
3. If you want to extract the Params from the link, use

```javascript
<script>

  console.log(UrlSearch.getParam("key"));//eeefes

</script>
```

________________________________________________________________
4. If you want to extract the sned Params to the link , use

```javascript
<script>

  UrlSearch.setParam("rtr","werwrr");
  UrlSearch.send("https://www.example.com");

</script>
```

________________________________________________________________
