import mongoose from 'mongoose'

// const pokemonSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true
//   },
//   num: {
//     type: String,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   img: {
//     type: String,
//     required: true
//   },
//   type: { type: [String], required: true },
//   height: {
//     type: String,
//     required: true
//   },
//   weight: {
//     type: String,
//     required: true
//   },
//   candy: {
//     type: String,
//     default: null
//   },
//   egg: {
//     type: String,
//     default: null
//   },
//   spawn_chance: {
//     type: Schema.Types.Mixed,
//     default: null
//   },
//   avg_spawns: {
//     type: Schema.Types.Mixed,
//     default: null
//   },
//   spawn_time: {
//     type: String,
//     default: null
//   },
//   multipliers: { type: [Number], default: null },
//   weaknesses: { type: [String], required: true },
//   prev_evolution: {
//     type: Schema.Types.Mixed,
//     default: null
//   }
// })

// eu não uso model no caso de uma coleção já existente

export default mongoose.model('Kanto', new mongoose.Schema({}), 'kanto')
