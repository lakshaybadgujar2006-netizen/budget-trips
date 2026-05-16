# Security Specification - Rating System

## 1. Data Invariants
- A rating must have a `packageId` that exists in our system (though we don't have a `packages` collection, we validate the ID format).
- A user can only create a rating if they are authenticated.
- A user can only delete their own rating (optional, but good for security).
- `rating` must be an integer between 1 and 5.
- `createdAt` must be the server time.
- `userName` must be provided.

## 2. The "Dirty Dozen" Payloads (Red Team Test Cases)
1. **Unauthenticated Write**: Attempt to create a rating without auth. -> `DENIED`
2. **Identity Spoofing**: Attempt to create a rating with a `userId` that doesn't match `request.auth.uid`. -> `DENIED`
3. **Invalid Rating Value**: Submit a rating of `6` or `-1`. -> `DENIED`
4. **Invalid Type**: Submit `rating` as a `string` instead of a `number`. -> `DENIED`
5. **Ghost Field Injection**: Add `isVerified: true` to the payload. -> `DENIED`
6. **Future Date**: Submit a `createdAt` value in the future (client-provided). -> `DENIED`
7. **Long String Attack**: Submit a `comment` longer than 1000 characters. -> `DENIED`
8. **ID Poisoning**: Use a 2KB junk string as the document ID. -> `DENIED`
9. **Malicious ID Characters**: Use path traversal characters in the document ID. -> `DENIED`
10. **Unauthorized Update**: Attempt to update someone else's rating. -> `DENIED`
11. **Unauthorized Delete**: Attempt to delete someone else's rating. -> `DENIED`
12. **Blanket Query**: Attempt to list all ratings without a package filter (if restricted). -> `ALLOWED` (usually reviews are public).

## 3. Test Runner
I will create `firestore.rules.test.ts` to verify these.
