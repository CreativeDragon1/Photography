// =============================================
// FIRESTORE DATABASE OPERATIONS
// =============================================

const COLLECTION = 'gallery';

// Fetch all photos ordered by creation time
async function dbGetPhotos() {
    const snap = await db.collection(COLLECTION).orderBy('createdAt', 'asc').get();
    return snap.docs.map(doc => ({ firestoreId: doc.id, ...doc.data() }));
}

// Add a new photo
async function dbAddPhoto(photo) {
    const docRef = await db.collection(COLLECTION).add({
        ...photo,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return docRef.id;
}

// Update an existing photo by Firestore doc ID
async function dbUpdatePhoto(firestoreId, updates) {
    await db.collection(COLLECTION).doc(firestoreId).update({
        ...updates,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Delete a photo by Firestore doc ID
async function dbDeletePhoto(firestoreId) {
    await db.collection(COLLECTION).doc(firestoreId).delete();
}

// Seed default photos into Firestore (run once from admin)
async function dbSeedDefaults(defaultPhotos) {
    const batch = db.batch();
    defaultPhotos.forEach((photo, i) => {
        const ref = db.collection(COLLECTION).doc();
        batch.set(ref, {
            src:       photo.src,
            title:     photo.title,
            category:  photo.category,
            caption:   photo.caption,
            isDefault: true,
            createdAt: firebase.firestore.Timestamp.fromMillis(Date.now() + i)
        });
    });
    await batch.commit();
}
