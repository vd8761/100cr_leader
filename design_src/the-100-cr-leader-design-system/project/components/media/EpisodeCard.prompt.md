`EpisodeCard` is the featured-episode row - title + EP badge, a 2-line teaser with "Read more", the inline `AudioPlayer`, duration • date, and platform icons.

```jsx
<EpisodeCard
  episode={1}
  title="The ₹25 Lakh CFO Who Paid for Herself in 90 Days"
  teaser="Before we start… I want to ask you one question. If you disappeared for the next 30 days…"
  duration="09:45min" date="12-06-2026"
  current="04:24" total="09:45" progress={0.42}
/>
```

Composes `Badge`, `AudioPlayer`, and `PlatformIcon`. Two-column grid: content + player on the left, meta rail on the right.
