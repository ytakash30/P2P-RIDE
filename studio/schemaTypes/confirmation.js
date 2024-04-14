export default {
    name: 'Confirmation',
    type: 'document',
    title: 'Ride',
    fields: [
      {
        name: 'status',
        type: 'string',
        options: {
          list: [
            'pending',
            'confirmed',
            'in_progress',
            'completed',
            'canceled'
          ]
        }
      },
      {
        name: 'confirmation',
        type: 'object',
        fields: [
          { name: 'driverWalletAddress', type: 'string' },
          { name: 'confirmedAt', type: 'datetime' },
        ]
      },
    ]
  }
  