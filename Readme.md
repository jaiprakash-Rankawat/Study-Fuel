# Routing

- we have to create a folder in `app` and create a `page.jsx` file inside it.
  Example : `app/about/page.jsx` 👉 `websiteName/about`

# Nested Routing

Example : `app/about(page.jsx)/student/page.jsx` 👉 `websiteName/about/student`

# Link

- link is used to navigate between pages.

```javascript
import Link from "next/link";
<Link href="/about">About</Link>;
```

# UseRouter

- It is Also used to navigate between pages.

```javascript
import { useRouter } from "next/navigation"; // Use this for Next.js 13+
const router = useRouter();
router.push("/about"); // Navigate to about page
```

`Link is More faster than UseRouter.`

# How to escap any folder

- If folder is closed in `()` then this will not consider as a page.
  for example : `app/(auth)/login/page.jsx` 👉 `websiteName/login`
