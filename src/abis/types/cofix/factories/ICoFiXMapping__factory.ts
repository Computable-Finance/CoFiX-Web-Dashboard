/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { ICoFiXMapping, ICoFiXMappingInterface } from '../ICoFiXMapping'

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
    ],
    name: 'checkAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBuiltinAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'cofiToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofiNode',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixDAO',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixRouter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixController',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixVaultForStaking',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCoFiNodeAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCoFiTokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCoFiXControllerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCoFiXDAOAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCoFiXRouterAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCoFiXVaultForStakingAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'registerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'cofiToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofiNode',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixDAO',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixRouter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixController',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'cofixVaultForStaking',
        type: 'address',
      },
    ],
    name: 'setBuiltinAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class ICoFiXMapping__factory {
  static readonly abi = _abi
  static createInterface(): ICoFiXMappingInterface {
    return new utils.Interface(_abi) as ICoFiXMappingInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICoFiXMapping {
    return new Contract(address, _abi, signerOrProvider) as ICoFiXMapping
  }
}